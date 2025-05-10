'use client';
import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UpdateManager({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" aria-label="Edit Manager">
        <LuPencil size={20} />
      </Button>
      <Modal className="bg-zinc-50" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
