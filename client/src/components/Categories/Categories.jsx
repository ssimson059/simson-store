function Categories() {
  return (
    <section style={{ padding: "24px 0" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
        Categories
      </h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <span style={{ padding: "8px 12px", background: "#f3f4f6", borderRadius: "999px" }}>Electronics</span>
        <span style={{ padding: "8px 12px", background: "#f3f4f6", borderRadius: "999px" }}>Fashion</span>
        <span style={{ padding: "8px 12px", background: "#f3f4f6", borderRadius: "999px" }}>Home</span>
      </div>
    </section>
  );
}

export default Categories;