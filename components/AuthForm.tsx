"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const Authform = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log("sign-up", values);
        toast.success("account created. please sign in");
        router.push("/sign-in");
      } else {
        console.log("sign in", values);
        toast.success("sign in successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`there was an error: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[556px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">Prep Wise</h2>
        </div>
        <h3>Practice job interview</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="name"
                placeholder="your name"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="email"
              placeholder="email@gmail.com"
            />
            <FormField
              control={form.control}
              name="password"
              label="password"
              placeholder="choose a password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "sign in" : "create an account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "no account yet?" : "Have an accont already?"}
          <Link
            className="font-bold text-user-primary ml-1"
            href={!isSignIn ? "/sign-in" : "/sign-up"}
          >
            {!isSignIn ? "sign-in" : "sign-up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Authform;
