import labedditLogo from "../../assets/LogoWnowords.png";

export default function LoadingPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={labedditLogo} alt="logo" />
      <h5>Carregando...</h5>
    </div>
  );
}
