"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GetUnits } from "@/actions/actions";

const MainForm = () => {
  const unitList = [
    "",
    "nm",
    "μm",
    "mm",
    "cm",
    "m",
    "km",
    "in",
    "yd",
    "ft-us",
    "ft",
    "fathom",
    "mi",
    "nMi",
  ] as const;

  // Define the schema
  const formSchema = z.object({
    value: z
      .string()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "Value must be a positive number",
      }), // Ensure the value is positive
    from: z.enum(unitList), // Ensure the unit is one of the predefined values
    to: z.enum(unitList), // Ensure the unit is one of the predefined values
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: 0,
      from: "",
      to: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    GetUnits(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                A quantity.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input
                  //value={unit}
                  defaultValue={"km"}
                  // onChange={(e) => {
                  //   setUnit(e.target.value);
                  // }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
               From
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input
                  //value={unit}
                  defaultValue={"km"}
                  // onChange={(e) => {
                  //   setUnit(e.target.value);
                  // }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
               To
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default MainForm;
