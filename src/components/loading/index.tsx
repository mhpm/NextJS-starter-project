type Props = {
  isLoading?: boolean;
};

const Loading = ({ isLoading = true }: Props) =>
  isLoading ? <div>Loading...</div> : null;

export default Loading;
