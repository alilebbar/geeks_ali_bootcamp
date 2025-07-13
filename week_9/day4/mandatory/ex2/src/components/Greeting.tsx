
type GreetingProps = {
  name: string;
  messageCount: number;
};

export default function Greeting(props: GreetingProps) {
  return (
    <h1>
      Hello, {props.name}! You have {props.messageCount} new messages.
    </h1>
  );
}