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

const MainForm = ({
  setLoading,
  setOutput,
}: {
  setLoading: any;
  setOutput: any;
}) => {
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      // Perform the action (assuming GetUnits is asynchronous)
      const result = await GetUnits(values);
      setOutput(result);
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-8">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Value</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    className="w-40 text-center"
                  />
                </FormControl>
                <FormDescription>A quantity.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div >
        <div className="flex gap-8 mb-8">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Input
                    placeholder="m,km,ft. e.t.c"
                    {...field}
                    className="w-40 text-center"
                  />
                </FormControl>
                <FormDescription>From</FormDescription>
                <FormMessage className="absolute max-w-96" />
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
                    placeholder="m,km,ft. e.t.c"
                    // onChange={(e) => {
                    //   setUnit(e.target.value);
                    // }}
                    {...field}
                    className="w-40 text-center"
                  />
                </FormControl>
                <FormDescription>To</FormDescription>
                <FormMessage className="absolute max-w-96" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default MainForm;
