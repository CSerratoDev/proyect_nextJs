'use client'
import { Modal, ModalContent, ModalBody, Button, useDisclosure} from "@heroui/react";
import { ReactNode } from "react";
import { LuTrash } from "react-icons/lu";
  
export default function DeleteProvider({children} : {children : ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div>
      <Button onPress={onOpen} color="secondary"><LuTrash size="20"/></Button>
      <Modal className="bg-zinc-50" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalBody>
                {children}
                <Button onPress={onClose}>Cancelar</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
  