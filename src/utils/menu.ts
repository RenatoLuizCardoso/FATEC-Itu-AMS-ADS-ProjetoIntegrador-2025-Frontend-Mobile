import type { categories, MenuItem } from '@data';

type Category = (typeof categories)[number];
type SubCategory = Category['subCategories'][number];

export function getItemsByPredicate(
  items: MenuItem[],
  predicate: (i: MenuItem) => boolean,
): MenuItem[] {
  return items.filter(predicate);
}

export function getCategoryItems(
  items: MenuItem[],
  categoryId: string,
): MenuItem[] {
  return getItemsByPredicate(
    items,
    (i) => i.categoryId === categoryId && !i.subCategoryId,
  );
}

export function getItemsBySubCategory(
  items: MenuItem[],
  categoryId: string,
  subCategoryId: string,
): MenuItem[] {
  return getItemsByPredicate(
    items,
    (i) => i.categoryId === categoryId && i.subCategoryId === subCategoryId,
  );
}

export function getSubCategoriesWithItems(
  items: MenuItem[],
  category: Category,
): Array<SubCategory & { items: MenuItem[] }> {
  return category.subCategories
    .map((sub) => {
      const subItems = getItemsBySubCategory(items, category.id, sub.id);
      return subItems.length > 0 ? { ...sub, items: subItems } : null;
    })
    .filter((x): x is SubCategory & { items: MenuItem[] } => Boolean(x));
}
