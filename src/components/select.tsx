// Definimos la interfaz para las opciones
interface Option {
  name: string;
  [key: string]: any; // Permite propiedades adicionales
}

// Definimos las props del componente
interface SelectComponentProps {
  options: Option[];
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectComponent: React.FC<SelectComponentProps> = ({ options, className = '', onChange }) => {
  return (
    <select
      className={className} 
      onChange={onChange}
    >
      <option value="">Sel</option>
      {options.map((option, index) => (
        <option key={index} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};