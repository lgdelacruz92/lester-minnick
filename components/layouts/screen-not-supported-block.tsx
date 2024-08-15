export default function ScreenNotSupportedBlock({ children }: any) {
  return <div className="block mobile:hidden">{children}</div>;
}
