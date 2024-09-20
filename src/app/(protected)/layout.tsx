import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  return (
    <>
      <main className="container my-5">{children}</main>
      <Toaster />
    </>
  );
}
