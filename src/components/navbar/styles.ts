export const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navbar__container: { background: "#fff", color: "#222" },

  // Title -------------------

  navbar__title: {
    display: "flex",
    alignItems: "center",
  },

  navbar__brandName: {
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "20px",
  },

  navbar__productName: {
    fontSize: "20px",
    letterSpacing: 0,
    fontWeight: 300,
  },

  // AccountOptions -------------------

  navbar__accountOptions: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  navbar__accountDetails: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "right",
  },

  navbar__userName: {
    fontSize: ".9rem",
    fontWeight: 700,
    color: "#222",
    textTransform: "capitalize",
  },

  navbar__position: {
    fontSize: ".6rem",
    fontWeight: 300,
    color: "#666",
  },

  navbar__avatar: {
    background: "dodgerblue",
  },

  navbar__menu: {
    width: "120px",
  },

  navbar__menuItem: {
    width: "100%",
    textAlign: "right",
    color: "red",
  },
};
