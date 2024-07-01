"use client";

import { addTodo } from "@/actions";
import { Input } from "@nextui-org/react";
import { Kbd } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useActionState } from "react";

import { BiPlus } from "react-icons/bi";

const Form = () => {
  return (
    <form action={action} className="flex w-full">
      <Input
        variant="bordered"
        placeholder="Add Your Todo"
        startContent={<BiPlus className="text-gray-400" />}
        endContent={<Kbd keys={["command"]}>F</Kbd>}
        size="lg"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default Form;
