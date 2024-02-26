const Container = ({ children }: { children: React.ReactNode}) => {
  return (
    <section className="container m-auto my-10 px-4">{children}</section>
  )
}

export default Container;
