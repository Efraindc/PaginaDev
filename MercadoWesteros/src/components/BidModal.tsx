import { useState, useEffect } from 'react';

type Props = {
  auctionId: number;
  minBid: number;
  onClose: () => void;
};

export default function BidModal({ auctionId, minBid, onClose }: Props) {
  const [amount, setAmount] = useState<number | ''>('');
  const [highest, setHighest] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const key = `auction_${auctionId}_highest`;
    const stored = localStorage.getItem(key);
    setHighest(stored ? Number(stored) : null);
  }, [auctionId]);

  const submitBid = () => {
    const num = typeof amount === 'number' ? amount : Number(amount);
    if (!num || isNaN(num) || num <= 0) {
      setMessage('Ingresa una cantidad válida');
      return;
    }

    const current = highest ?? 0;
    const minAllowed = Math.max(minBid, current + 1);
    if (num < minAllowed) {
      setMessage(`La puja mínima debe ser ${minAllowed}`);
      return;
    }

    // guardar como nueva puja más alta en localStorage
    const key = `auction_${auctionId}_highest`;
    localStorage.setItem(key, String(num));
    setHighest(num);
    setMessage('Puja enviada correctamente. Eres el lider temporal.');

    // opcional: cerrar modal tras un momento
    setTimeout(() => onClose(), 900);
  };

  return (
    <div className="bid-modal-overlay">
      <div className="bid-modal">
        <button className="bid-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <h3>Realizar Puja</h3>
        <p>Id Subasta: {auctionId}</p>
        <p>Pujs actual: {highest !== null ? `${highest} monedas` : 'Sin pujas aún'}</p>
        <p>Puja mínima: {Math.max(minBid, (highest ?? 0) + 1)} monedas</p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Ingresa tu puja"
        />
        <div className="bid-actions">
          <button onClick={submitBid} className="bid-submit">Enviar Puja</button>
          <button onClick={onClose} className="bid-cancel">Cancelar</button>
        </div>
        {message && <div className="bid-message">{message}</div>}
      </div>
    </div>
  );
}
