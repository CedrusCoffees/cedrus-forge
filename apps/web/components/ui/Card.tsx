type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-6 shadow ${className}`}
    >
      {children}
    </div>
  );
}