import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1>Your Next Application</h1>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
