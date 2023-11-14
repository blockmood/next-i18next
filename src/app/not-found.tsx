import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src="https://www.dsers.com/static/404-ba48a47c97c05a44a98a73a4e1ce19eb.png" alt="" />
      <p
        style={{ fontSize: '24px', fontWeight: 600, color: 'rgba(0,0,0,.88)', marginTop: '100px' }}
      >
        Sorry, the page you’re looking for cannot be found!
      </p>
      <Link
        style={{
          display: 'block',
          width: '239px',
          height: '56px',
          background: '#ff8f00',
          borderRadius: ' 8px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '1px',
          lineHeight: '56px',
          textAlign: 'center',
          margin: '40px auto 0',
        }}
        href="/"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
