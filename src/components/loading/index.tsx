type Props = {
  isOpen?: boolean;
};

const Loading = ({ isOpen = true }: Props) =>
  isOpen ? <div>Loading...</div> : <></>;

export default Loading;
