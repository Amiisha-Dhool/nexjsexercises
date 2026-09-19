export const dynamic = "force-dynamic";

export default function TimePage() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>timeki hore</h1>
      <p>{time}</p>
    </div>
  );
}