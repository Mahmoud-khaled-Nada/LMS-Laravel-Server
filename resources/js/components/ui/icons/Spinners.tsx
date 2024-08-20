export const Spinners = () => {
  return (
    <div
      className="animate-spin inline-block ml-2 size-4 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
