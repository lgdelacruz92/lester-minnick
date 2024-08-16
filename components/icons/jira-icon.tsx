export default function JiraIcon(props: any) {
  return (
    <svg
      stroke={props.stroke ? props.stroke : "var(--cui-black)"}
      fill={props.fill ? props.fill : "var(--cui-black)"}
      height="100%"
      width="100%"
      {...props}
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27.868 4.832c-3.507 1.92-7.572 2.935-11.756 2.936-4.184-0.001-8.249-1.016-11.756-2.936-0.083-0.046-0.179-0.070-0.276-0.070-0.187 0-0.366 0.090-0.478 0.239-0.166 0.221-0.171 0.591 0.112 0.812 1.756 1.309 3.692 2.332 5.754 3.031 2.137 0.725 4.373 1.093 6.643 1.094h0.002c2.271-0.001 4.506-0.369 6.643-1.094 2.063-0.699 3.998-1.721 5.757-3.032zM24.138 10.405c-1.016 0.389-2.049 0.684-2.991 0.903-0.192 0.045-0.347 0.188-0.412 0.359-0.686 1.88-2.439 3.67-4.278 5.546-0.074 0.070-0.177 0.163-0.345 0.163s-0.27-0.089-0.345-0.163c-1.839-1.875-3.591-3.659-4.278-5.54-0.064-0.171-0.22-0.314-0.412-0.359-0.943-0.22-1.977-0.524-2.992-0.912-0.055-0.021-0.112-0.031-0.168-0.031-0.102 0-0.2 0.032-0.284 0.096-0.13 0.099-0.198 0.26-0.182 0.415 0.156 1.564 0.773 3.092 1.888 4.694 1.048 1.506 2.415 2.9 3.737 4.248 2.435 2.484 4.736 4.83 4.938 7.55 0.018 0.246 0.223 0.436 0.469 0.436h2.861c0.129 0 0.252-0.053 0.341-0.146s0.136-0.219 0.129-0.348c-0.090-1.819-0.774-3.64-2.093-5.567-0.276-0.404-0.572-0.797-0.881-1.182-0.126-0.157-0.073-0.351 0.023-0.449 0.095-0.097 0.19-0.195 0.286-0.293 1.322-1.348 2.689-2.742 3.737-4.248 1.115-1.602 1.733-3.122 1.888-4.685zM13.042 21.939c-0.068-0.071-0.167-0.143-0.334-0.143-0.214 0-0.341 0.148-0.388 0.221-1.204 1.831-1.825 3.56-1.911 5.297-0.006 0.128 0.041 0.255 0.13 0.349s0.214 0.147 0.342 0.147h2.856c0.245 0 0.453-0.192 0.471-0.437 0.062-0.837 0.323-1.676 0.797-2.558 0.164-0.305 0.037-0.591-0.058-0.714-0.471-0.612-1.047-1.265-1.905-2.16zM16.115 11.872c0.897 0 1.417-0.054 1.599-0.054 0.221 0 0.433 0.181 0.433 0.435 0 0.074-0.017 0.127-0.035 0.174-0.119 0.318-0.661 1.462-1.67 2.443-0.113 0.11-0.241 0.13-0.33 0.13h-0.001c-0.088 0-0.216-0.020-0.329-0.13-1.009-0.981-1.551-2.125-1.67-2.443-0.018-0.047-0.035-0.1-0.035-0.174 0-0.254 0.212-0.435 0.433-0.435 0.183 0 0.703 0.054 1.599 0.054h0.006z"></path>
    </svg>
  );
}
