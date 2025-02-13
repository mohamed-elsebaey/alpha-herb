import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary font-bold rounded-lg text-sm px-28 py-4 text-center"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="w-full flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        `${label}`
      )}
    </button>
  );
}
