export const ShowError: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="mt-3 mb-3 alert alert-danger" role="alert">
      {children}
    </div>
  );
};
