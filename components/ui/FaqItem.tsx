interface FaqItemProps {
  n: number;
  question: string;
  answer: string;
}

/** One accordion row. Open/close behaviour is wired by useFaq on the parent section. */
export default function FaqItem({ n, question, answer }: FaqItemProps) {
  return (
    <div className="item">
      <h3 style={{ margin: 0 }}>
        <button className="q" aria-expanded="false" aria-controls={`sec13-a${n}`} id={`sec13-q${n}`}>
          <span>{question}</span>
          <span className="pm"></span>
        </button>
      </h3>
      <div className="a" id={`sec13-a${n}`} role="region" aria-labelledby={`sec13-q${n}`}>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
