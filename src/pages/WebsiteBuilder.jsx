import { useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import Draggable from "react-draggable";

const WebsiteBuilder = () => {
  const [elements, setElements] = useState([]);

  const addElement = (type) => {
    setElements([...elements, { type, id: elements.length }]);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Website Builder</Text>
        <Button onClick={() => addElement("text")}>Add Text</Button>
        <Button onClick={() => addElement("image")}>Add Image</Button>
        <Box border="1px solid" width="100%" height="500px" position="relative">
          {elements.map((element) => (
            <Draggable key={element.id}>
              <Box position="absolute" p={2} bg="gray.100" border="1px solid">
                {element.type === "text" ? <Text>Text Element</Text> : <Text>Image Element</Text>}
              </Box>
            </Draggable>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default WebsiteBuilder;