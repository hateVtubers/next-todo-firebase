export const Loading = () => {
  return (
    <div className="grid place-items-center">
      <div className="lds-dual-ring"></div>
      <style jsx>{`
        .lds-dual-ring {
          display: inline-block;
          width: 35px;
          height: 35px;
        }
        .lds-dual-ring:after {
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          margin: 8px;
          border-radius: 50%;
          border: 6px solid #1A4084;
          border-color: #1A4084 transparent #1A4084 transparent;
          animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
