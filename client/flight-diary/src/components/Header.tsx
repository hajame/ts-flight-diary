interface TitleProps {
  title: string;
}

const Header = (props: TitleProps) => {
  return (
   <div>
    <h1>{props.title}</h1>
   </div>
  );
}

export default Header;