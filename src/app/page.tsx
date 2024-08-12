"use client";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useOrganization,
  useSession,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const organization = useOrganization();
  const createFile = useMutation(api.files.createFile);
  

  let orgId:string | undefined = undefined;
  if(organization.isLoaded && user.isLoaded){
    orgId=organization.organization?.id || user.user?.id  }
  
const files = useQuery(
    api.files.getFiles,
    orgId ? { orgId} : "skip"
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({ name: "hello", orgId, });
        }}
      >
        Click me
      </Button>
    </main>
  );
}
