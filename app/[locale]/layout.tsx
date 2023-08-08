export default function NestedLayout({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col flex-1 p-5">{children}</div>;
}
