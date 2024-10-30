// "use client";

// import React from "react";
// import {useForm} from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {z} from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import {Input} from "./ui/input";
// import {Button} from "./ui/button";
// import {Textarea} from "./ui/textarea";
// import {Skeleton} from "./ui/skeleton";

// const formSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   message: z.string().min(10),
// });

// export function ContactForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//   }

//   if (hasMounted) {
//     return (
//       <div className="flex-grow h-full">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-3 p-10 border border-blue-900/25 shadow-2xl rounded-md"
//           >
//             <h1 className="text-xl font-semibold my-2 ">Send us and Inquiry</h1>
//             <FormField
//               control={form.control}
//               name="name"
//               render={({field}) => (
//                 <FormItem>
//                   <FormLabel>Full Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter Your Full Name"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({field}) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter Your Email"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({field}) => (
//                 <FormItem>
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Enter your message or enquiry here"
//                       rows={6}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               type="submit"
//               className="my-3"
//             >
//               Submit
//             </Button>
//           </form>
//         </Form>
//       </div>
//     );
//   }
//   return (
//     <Skeleton className="space-y-3 p-10 border border-blue-600 rounded-md md:w-[40%] " />
//   );
// }

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Skeleton } from "./ui/skeleton";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [hasMounted, setHasMounted] = React.useState(false);
  const [status, setStatus] = React.useState({
    loading: false,
    success: false,
    error: "",
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          subject: "New Contact Form Submission", // Adding default subject
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      // Reset form after successful submission
      form.reset();

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Failed to send message",
      });
    }
  }

  if (hasMounted) {
    return (
      <div className="flex-grow h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 p-10 border border-blue-900/25 shadow-2xl rounded-md"
          >
            <h1 className="text-xl font-semibold my-2">Send us an Inquiry</h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message or enquiry here"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {status.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{status.error}</AlertDescription>
              </Alert>
            )}

            {status.success && (
              <Alert className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>Message sent successfully!</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="my-3 w-full"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    );
  }
  return (
    <Skeleton className="space-y-3 p-10 border border-blue-600 rounded-md md:w-[40%]" />
  );
}