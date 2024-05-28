import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Textarea,
  HStack,
  Checkbox,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="490px">
      <Form method="POST" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task:</FormLabel>
          <Input type="text" name="title" />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter detailed description of the task.."
            name="description"
          />
        </FormControl>

        <FormControl>
          <HStack alignItems="center">
            <Box>
              <Icon as={Checkbox} colorScheme="orange" name="priority" />
            </Box>
            <FormLabel ml="10px">Make this priority task</FormLabel>
          </HStack>
        </FormControl>

        <Button mt="20px" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("priority") === "",
  };

  console.log(task);

  return redirect("/");
};
