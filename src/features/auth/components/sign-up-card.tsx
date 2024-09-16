import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from '../types';


interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
};

export const SignUpCard = ({
  setState,
  
}: SignUpCardProps) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
      <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>REGISTER YOUR ACCOUNT</CardTitle>
          <CardDescription>Register an account to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-0 pb-0">
          <form className="space-y-2.5">
            <Input
              disabled={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
            />
            <Input
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required
            />
            <Input
              disabled={false}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              required
            />
            <Button
              variant="manjit"
              type="submit"
              className="w-full"
              size="lg"
              disabled={false}
            >
              Continue
            </Button>
          </form>
          <Separator className="bg-red-300" />
          <div className="flex flex-col gap-y-2.5">
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FcGoogle className=" size-5 absolute top-3 left-2.5" />
              Sign up with Google
            </Button>
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className=" size-4 absolute top-3 left-3" />
              Sign up with Github
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Already have an account ?
            <span
              onClick={() => setState("signIn")}
              className="text-sky-700 hover:underline cursor-pointer font-semibold"
            >
              Sign in
            </span>
          </p>
        </CardContent>
      </Card>
    );
};