'use client'
import { Modal, ModalContent, ModalBody, Button, useDisclosure} from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";
  
export default function CreateProviderButton({children} : {children : ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div>
      <Button onPress={onOpen} color="secondary"><LuPlus size="20"/></Button>
      <Modal className="bg-zinc-50" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalBody>
                  {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
  