export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #F1F5F9',
      background: '#FAFAFA',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '24px 96px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/images/logo.png"
            alt="ResumeForge"
            style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'contain' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 13, color: '#94A3B8' }}>Privacy-first resume builder</span>
          <span style={{ fontSize: 13, color: '#CBD5E1' }}>&middot;</span>
          <span style={{ fontSize: 13, color: '#94A3B8' }}>React &middot; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}