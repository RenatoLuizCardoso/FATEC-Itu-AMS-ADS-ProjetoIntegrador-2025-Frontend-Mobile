import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import {
  Modal as PaperModal,
  type ModalProps as PaperModalProps,
  Portal,
} from 'react-native-paper';

type ModalProps = PropsWithChildren & PaperModalProps;

export function Modal({
  children,
  contentContainerStyle,
  ...props
}: ModalProps) {
  return (
    <Portal>
      <PaperModal
        {...props}
        contentContainerStyle={[modal, contentContainerStyle]}
      >
        {children}
      </PaperModal>
    </Portal>
  );
}

const { modal } = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '10%',
    padding: 24,
    borderRadius: 12,
  },
});
