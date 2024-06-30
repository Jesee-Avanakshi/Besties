import { Button,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Flex, FormControl, FormLabel, Input, Textarea, RadioGroup, Radio} from '@chakra-ui/react'
import React from 'react'

function CreateUsermodal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
    <Button onClick={onOpen}> + </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                Add New Friend
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <FormControl>
                        <FormLabel> Name </FormLabel>
                        <Input placeholder='Full Name'></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel> Role </FormLabel>
                        <Input placeholder='Software Engineer'></Input>
                    </FormControl>

                </Flex>
                <Flex>
                <FormControl mt={4}>
                        <FormLabel> Description </FormLabel>
                        <Textarea placeholder='Write something about them'></Textarea>
                
                </FormControl>

                </Flex>
                <RadioGroup defaultValue='Male' mt={4}>
                    <Flex gap={5}>
                        <Radio value='male'>Male</Radio>
                        <Radio value='female'>Female</Radio>
                    </Flex>

                </RadioGroup>


            </ModalBody>
            <ModalFooter alignItems justifyContent={'space-between'}>
                <Button colorScheme='blue'>Add</Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>

    </Modal>
    </>
    
  )
}

export default CreateUsermodal