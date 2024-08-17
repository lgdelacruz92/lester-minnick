export default function HtmlIcon(props: any) {
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
      <path d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"></path>
    </svg>
  );
}
