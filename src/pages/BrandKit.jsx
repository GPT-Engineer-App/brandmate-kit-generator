import { useState } from "react";
import { Box, Text, Image, VStack, HStack, Button } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const templates = [
  "Business Card",
  "Email Signature",
  "Letterhead",
  "Advertisement",
  "Poster",
  "Flyer",
  "Brochure",
  "Invitation",
];

const BrandKit = () => {
  const [logos, setLogos] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setLogos(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Brand Kit Generator</Text>
        <Box {...getRootProps()} border="2px dashed" p={4} width="100%">
          <input {...getInputProps()} />
          <Text>Drag 'n' drop some files here, or click to select files</Text>
        </Box>
        <HStack spacing={4}>
          {logos.map((file) => (
            <Image key={file.name} src={file.preview} alt={file.name} boxSize="100px" />
          ))}
        </HStack>
        <VStack spacing={4} width="100%">
          {templates.map((template) => (
            <Button key={template} width="100%">
              {template}
            </Button>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default BrandKit;