import type { StoreKey } from "../types/game";

export const PLATFORM_LOGOS: Record<string, string> = {
  pc: `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z' fill='#FFF'/></svg>`,

  android: `<svg viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg"><path d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z" fill="#FFF"/></svg>`,

  playstation: `<svg viewBox='0 0 21 16' xmlns='http://www.w3.org/2000/svg'><path d='M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z' fill='#FFF'/></svg>`,

  xbox: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='#FFF' d='M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z'/></svg>`,

  mac: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 18'><path d='M10.869 0h.127c.102 1.26-.379 2.202-.963 2.884-.574.677-1.359 1.334-2.629 1.234-.084-1.242.397-2.114.98-2.794C8.927.69 9.919.126 10.87 0zm3.756 13.196v.036a10.534 10.534 0 01-1.494 2.899c-.57.789-1.267 1.85-2.513 1.85-1.077 0-1.792-.696-2.896-.715-1.167-.02-1.81.583-2.877.734h-.364c-.783-.114-1.416-.74-1.877-1.302A11.452 11.452 0 010 10.134v-.808c.083-1.969 1.033-3.57 2.295-4.345.667-.413 1.583-.764 2.603-.607.437.068.884.219 1.275.368.371.144.835.398 1.275.385.298-.009.594-.165.894-.275.88-.32 1.74-.687 2.877-.514 1.365.207 2.334.818 2.933 1.76-1.155.74-2.068 1.855-1.912 3.76.138 1.73 1.137 2.742 2.385 3.338z' fill='#FFF'/></svg>`,

  linux: `<svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.52 14.452c-.513-.216-.733-.503-.712-.93.022-.5-.254-.866-.385-1.01.079-.312.31-1.386 0-2.32-.334-.999-1.352-2.525-2.403-4.025-.43-.616-.45-1.285-.474-2.06-.022-.74-.048-1.579-.45-2.51C9.66.582 8.785 0 7.694 0a3.23 3.23 0 00-1.829.572c-1.05.744-.91 2.366-.819 3.44.013.147.024.286.031.404.061 1.052.006 1.606-.067 1.774-.047.11-.279.423-.524.755-.254.343-.541.732-.777 1.094-.281.436-.508 1.103-.728 1.747-.16.471-.312.917-.46 1.183-.28.512-.21.99-.152 1.21-.106.076-.259.225-.388.505-.156.342-.473.526-1.132.657-.303.063-.512.194-.621.388-.16.283-.073.638.006.881.117.357.044.583-.088.993-.03.095-.065.202-.1.32a.59.59 0 00.06.504c.248.391.974.529 1.722.62.447.054.935.237 1.408.415.463.173.942.353 1.377.408.066.008.131.012.195.012.657 0 .954-.447 1.048-.631a11.36 11.36 0 011.889-.23 8 8 0 011.878.199c.072.142.262.466.566.633.166.093.398.147.636.147.254 0 .737-.062 1.119-.475.38-.414 1.333-.944 2.029-1.33.155-.087.3-.167.427-.24.39-.223.604-.54.585-.872a.735.735 0 00-.463-.63z" fill="#FFF"/></svg>`,

  nintendo: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 16'><path fill='#FFF' fill-rule='evenodd' d='M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z'/></svg>`,

  ios: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 29'><path fill='#FFF' d='M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z'/></svg>`,
};

export const RATING_COLORS_LOGOS = {
  exceptional: {
    color: "3d314a",
    logo: "🎯",
  },
  recommended: {
    color: "684756",
    logo: "👍",
  },
  meh: {
    color: "ab8476",
    logo: "",
  },
  skip: {
    color: "96705b",
    logo: "",
  },
};

export const ESRB_RATINGS = {
  everyone: {
    name: "Everyone",
    value: "+6",
  },
  "everyone 10+": {
    name: "Everyone 10+",
    value: "+10",
  },
  teen: {
    name: "Teen",
    value: "+13",
  },
  mature: {
    name: "Mature",
    value: "+17",
  },
  adult: {
    name: "Adult",
    value: "+18",
  },
} as const;
export const STORE_LOGOS: Record<StoreKey, string> = {
  steam: `<svg class="SVGInline-svg game__availability-icon-svg steam-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="#FFF" d="M.028 10.277a21.629 21.629 0 00-.004-.008C.399 4.535 5.148 0 10.954 0c6.048 0 10.952 4.925 10.952 11s-4.904 11-10.953 11C6.015 22 1.84 18.719.473 14.208l4.147 1.719c.21.937.85 1.76 1.795 2.155a3.034 3.034 0 003.971-1.643c.167-.406.245-.832.234-1.257l3.835-2.752.094.001c2.295 0 4.16-1.879 4.16-4.186 0-2.308-1.865-4.185-4.16-4.185-2.294 0-4.16 1.877-4.16 4.185v.054l-2.68 3.91c-.434-.02-.87.057-1.282.228a2.976 2.976 0 00-.513.272L.028 10.276v.001zm9.718 5.892a2.342 2.342 0 01-3.065 1.27 2.334 2.334 0 01-1.206-1.156l1.354.564c.88.368 1.89-.051 2.256-.935a1.74 1.74 0 00-.929-2.27l-1.4-.582a2.331 2.331 0 012.993 1.305 2.355 2.355 0 01-.003 1.804zm4.803-5.135a2.784 2.784 0 01-2.771-2.789 2.784 2.784 0 012.771-2.788 2.784 2.784 0 012.773 2.788 2.784 2.784 0 01-2.773 2.789zm-2.077-2.793c0 1.157.933 2.094 2.082 2.094 1.15 0 2.082-.937 2.082-2.094a2.09 2.09 0 00-2.082-2.096 2.09 2.09 0 00-2.082 2.096z" opacity=".4"></path></svg>`,

  playstation: `<svg viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg"><path d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z" fill="#FFF"/></svg>`,

  apple: `<svg class="SVGInline-svg game__availability-icon-svg apple-appstore-svg" xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20"><g opacity=".4" fill="#fff"><path d="M8.493 12.576c1.463 0 2.74-.02 4.014.004 1.322.028 2.231.946 2.195 2.133-.016.473-.17.717-.708.713-4.11-.016-8.217-.004-12.328-.024-1.04-.004-1.682-.605-1.666-1.447.012-.806.692-1.367 1.706-1.379.906-.012 1.815-.032 2.72 0 .518.02.85-.164 1.1-.6a775.913 775.913 0 013.994-6.85c.218-.373.17-.658-.012-1.027-.376-.75-1.035-1.334-1.237-2.18-.198-.822.044-1.491.63-1.76.776-.348 1.455-.124 1.985.662.174.26.335.533.525.841.38-.204.461-.593.667-.873.55-.758 1.322-.998 1.993-.593.703.424.914 1.194.445 2.012-1.718 2.994-3.468 5.971-5.207 8.953-.242.417-.477.826-.816 1.415z"></path><path d="M13.61 5.45c.805 1.37 1.56 2.661 2.312 3.956.558.958 1.112 1.916 1.65 2.882.161.292.412.284.683.284.986 0 1.972-.012 2.959.008 1.07.024 1.774.622 1.746 1.447-.024.826-.68 1.355-1.726 1.379-.53.012-1.06.004-1.775.004.457.798.845 1.475 1.233 2.148.23.397.42.806.332 1.275-.097.5-.392.85-.882 1.042-.529.204-1.002.1-1.414-.249a2.147 2.147 0 01-.449-.553c-1.783-3.018-3.65-5.992-5.271-9.098-.792-1.499-.574-3.299.602-4.525zM1.888 18.88c.049-1.25.683-2.003 1.261-2.72.457-.566 2.292-.085 2.656.585.13.24 0 .404-.101.58-.38.662-.72 1.351-1.156 1.973-.368.52-.918.845-1.593.617-.594-.192-1.156-.477-1.067-1.034z"></path></g></svg>`,

  xbox: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='#FFF' d='M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z'/></svg>`,

  gog: `<svg class="SVGInline-svg game__availability-icon-svg gog-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23"><g fill="none" fill-rule="evenodd" opacity=".4"><rect width="23" height="22" x=".5" y=".5" stroke="#FFF" rx="2"></rect><path fill="#FFF" fill-rule="nonzero" d="M21.148 11.039c0 .56-.455 1.012-1.013 1.012h-4.348v-1.305h3.665a.39.39 0 00.39-.39V6.044a.39.39 0 00-.39-.39h-1.969a.39.39 0 00-.388.39v1.962c0 .216.174.39.388.39h1.573v1.305H16.8c-.56 0-1.014-.452-1.014-1.011V5.362c0-.559.453-1.012 1.014-1.012h3.334c.558 0 1.013.453 1.013 1.012v5.677zm-.004 7.57h-1.288v-3.987h-.905a.382.382 0 00-.383.384v3.602H17.28v-3.986h-.906a.383.383 0 00-.383.384v3.606h-1.288V14.33c0-.548.446-.995.999-.995h5.442v5.273zM13.73 9.7h-3.335c-.56 0-1.013-.452-1.013-1.011V5.362c0-.559.453-1.012 1.013-1.012h3.335c.558 0 1.012.453 1.012 1.012V8.69c0 .559-.454 1.011-1.012 1.011zm-.682-4.046h-1.97a.389.389 0 00-.39.39v1.961c0 .216.174.39.39.39h1.969a.385.385 0 00.385-.39V6.044a.385.385 0 00-.385-.39zm.624 11.957c0 .55-.447.996-.998.996H9.388a.997.997 0 01-.999-.996V14.33a.997.997 0 011-.995h3.284c.55 0 .998.446.998.995v3.28zm-1.67-2.99h-1.94a.383.383 0 00-.384.384v1.932c0 .211.171.385.384.385l.004-.003v.003h1.932v-.003l.004.003a.384.384 0 00.382-.385v-1.932a.382.382 0 00-.382-.384zm-3.665-3.583c0 .56-.455 1.012-1.014 1.012H2.975v-1.305H6.64a.389.389 0 00.389-.39V6.044a.389.389 0 00-.39-.39H4.67a.389.389 0 00-.388.39v1.962c0 .216.173.39.388.39h1.574v1.305H3.988c-.56 0-1.013-.452-1.013-1.011V5.362c0-.559.453-1.012 1.013-1.012h3.334c.56 0 1.014.453 1.014 1.012v5.677zm-.978 3.583H4.65a.383.383 0 00-.383.384v1.932c0 .212.17.386.383.386h2.708v1.288h-3.38v-.004c-.552 0-1-.446-1-.997v-3.28a.998.998 0 011-.995h3.38v1.286z"></path></g></svg>`,

  google: `<svg class="SVGInline-svg game__availability-icon-svg google-play-svg" xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 18 20"><path fill="#FFF" d="M16.9 8.09L3.354.29a2.173 2.173 0 00-2.178.007A2.208 2.208 0 00.088 2.198v15.603c0 .78.416 1.51 1.087 1.901a2.171 2.171 0 002.178.008L16.9 11.908a2.206 2.206 0 000-3.817zm-5.87-1.844l-1.86 2.61-4.45-6.243 6.31 3.633zM2.185 18.658a.847.847 0 01-.346-.109.87.87 0 01-.428-.748V2.198a.856.856 0 01.772-.86L8.355 10l-6.17 8.658zm2.536-1.272l4.449-6.243 1.86 2.61-6.31 3.633zm11.523-6.635l-4.059 2.337L9.985 10l2.2-3.088 4.059 2.337a.868.868 0 010 1.502z" opacity=".5"></path></svg>`,

  nintendo: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 16'><path fill='#FFF' fill-rule='evenodd' d='M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z'/></svg>`,

  itch: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="8.226 10.91 49.755 44.078"><path d="M14.419 10.91l-6.194 7.742v2.168c0 6.193 10.116 6.193 10.116 0 0 6.193 9.703 6.193 9.703 0 0 6.193 10.116 6.193 10.116 0 0 6.193 9.704 6.193 9.704 0 0 6.193 10.115 6.193 10.115 0v-2.168l-6.193-7.742H14.419zm3.82 13.626c-.31.413-.62.722-.929 1.032-1.135.929-2.581 1.342-4.026 1.342-.413 0-.826 0-1.135-.103v28.181h41.807V26.807c-.413.103-.723.103-1.136.103-1.445 0-2.89-.413-4.026-1.342-.309-.31-.619-.62-.928-1.032-.311.413-.518.722-.93 1.032-1.136.929-2.58 1.342-3.923 1.342-1.444 0-2.89-.413-3.923-1.342-.309-.31-.619-.62-.929-1.032-.31.413-.619.722-.929 1.032-1.341 1.032-2.787 1.445-4.232 1.445s-2.89-.413-4.026-1.342c-.31-.31-.619-.619-.929-1.032-.31.413-.516.723-.929 1.032-1.136.929-2.581 1.342-3.923 1.342-1.445 0-2.89-.413-3.922-1.342-.31-.31-.619-.619-.929-1.032l-.103-.103z"/></svg>`,

  epic: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 382" width="28" height="30"><style>.st0{fill:#5f5f5f}.st1{fill:#fff}</style><title>Untitled 6</title><path class="st0" d="M250.8.9H25C6.8.9 0 7.7 0 26v220.9c0 2.1.1 4 .3 5.8.4 4 .5 7.9 4.2 12.3.4.4 4.2 3.3 4.2 3.3 2 1 3.4 1.7 5.7 2.7l111.1 46.6c5.8 2.6 8.2 3.7 12.4 3.6 4.2.1 6.6-.9 12.4-3.6L261.4 271c2.3-.9 3.7-1.7 5.7-2.7 0 0 3.8-2.8 4.2-3.3 3.7-4.4 3.8-8.3 4.2-12.3.2-1.8.3-3.7.3-5.8V26c0-18.3-6.7-25.1-25-25.1"/><path class="st1" d="M235.6 223l-.1.5-.1.6-.1.5-.2.5-.1.5-.2.5-.2.5-.2.4-.2.5-.3.4-.3.4-.3.4-.3.4-.3.4-.4.4-.3.3-.4.4-.4.3-.4.3-.4.2-.4.3-.5.3-.5.2-.5.3-.5.2-.5.2-.5.2v-.1l-.5.2-.5.1-.9.2-.5.1-.5.1-.5.1-.5.1-.6.1-.5.1h-2l-.5-.1h-.6l-.5-.1-.5-.1-.6-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.2-.5-.1-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.3-.4-.3-.5-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.4.3-.4.4-.4.3-.4.4-.4.3-.4.3-.4.4-.4.3-.4.4-.4.3-.4.4-.4.3-.4.3-.4.4-.4.3-.4.4-.4.3-.4.4.3.5.3.4.3.5.3.4.3.5.3.4.3.5.2.4.3.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.1 1 .2.6.1.5.1h.5l.6.1h1.1l.6-.1.5-.1.5-.1.5-.1.4-.2.4-.2.4-.3.3-.4.2-.4.2-.5.1-.5v-.1l-.1-.6-.2-.5-.3-.4-.4-.3-.4-.3-.4-.2-.5-.2-.5-.2-.6-.3-.4-.1-.4-.1-.5-.2-.5-.1-.5-.2-.5-.1-.6-.2-.5-.1-.6-.2-.5-.1-.5-.2-.5-.1-.5-.2-.5-.2-.5-.1-.5-.2-.5-.2-.5-.2-.6-.2-.5-.2-.5-.2-.5-.2-.5-.3-.5-.3-.4-.3-.5-.3-.4-.3-.4-.3-.4-.3-.4-.4-.4-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.5-.2-.4-.2-.4-.1-.5-.2-.4-.1-.5-.1-.5-.1-.5-.1-.5-.1-.6v-1.2l.1-.5.1-.5.1-.5.1-.5.1-.5.2-.5.1-.5.2-.5.2-.5.2-.5.3-.5.3-.5.3-.4.3-.4.4-.4.4-.4.4-.4.4-.4.4-.3.4-.3.4-.3.4-.3.5-.3.5-.2.5-.3.5-.2.5-.2.5-.2.5-.2.4-.1.5-.1.5-.1.5-.1.5-.1.5-.1.5-.1.5-.1.5-.1h2.2l.6.1.6.1h.5l.6.1.5.1.6.1.5.1.5.1.5.1.5.1.5.1.5.2.5.2.5.1.5.2.5.2.5.2.5.2.5.2.5.3.4.2.5.3.5.3.4.3.5.3.4.3.4.3.4.3.4.3-.3.4-.3.4-.3.4-.3.4-.3.5-.3.4-.3.4-.3.4-.3.4-.3.4-.3.4-.3.4-.3.5-.3.4-.3.4-1 2.2-.3.4-.4-.3-.5-.3-.4-.3-.4-.3-.5-.2-.4-.3-.5-.2-.4-.2-.5-.2-.4-.2-.5-.2-.4-.2-.6-.2-.5-.2-.5-.2-.5-.1-.3.2-.5-.1-.5-.1-.5-.1-.5-.1h-1.1l-.6.1-.5.1-.5.1-.4.2-.4.2-.5.4-.3.5-.2.5-.1.5v.1l.1.7.2.6.2.3.4.4.5.3.4.3.5.2.6.2.6.2.4.1.4.2.5.1.5.2.5.1.6.2.6.2.6.2.6.1.5.2.6.2.5.1.5.2.5.2.5.2.5.2.5.2.5.1.6.2.5.3.5.2.5.3.5.3.5.3.4.3.4.3.4.3.4.4.4.4.4.4.4.4.3.4.3.5.3.4.3.5.2.4.2.5.1.5.1.5.2 1 .1.5.1.6v1.2l-.7-.6zm-35.5 10.2H171v-37.1h29.3v8.4h-19.6v6.1h17.6v7.9h-17.6v6.3h19.9v8.4h-.5zm-37.1 0h-9.3v-21.9l-.3.4-.3.5-.3.4-.3.4-.3.5-.3.4-.3.4-.3.5-.3.4-.3.4-.3.4-.3.5-.3.4-.3.4-.3.5-.3.4-.3.4-.3.5-.2.4-.3.4-.3.5-.3.4-.3.4-.3.5-.3.4-.2.4-.3.4-.3.5-.3.4-.3.4-.2.5-.3.4-.3.4-.3.5-.3.4h-.2l-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.2-.4-.3-.5-.3-.4-.3-.5.5-.5-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.3-.4-.2-.3-.3-.4-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.2-.3-.3-.5-.3-.4-.3-.5-.3-.4-.3-.5-.3-.4v21.8h-9.6V196H135l.3.4.3.5.3.4.3.5.3.4.3.5.3.4.3.5.3.4.3.4.3.5.3.4.3.5.3.4.3.5.3.4.3.4.3.5.3.4.3.5.3.4.3.5.3.4.2.5.3.4.2.4.3.5.3.4.3.5.3.4.2.5.3.4.3.5.3.4.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4.2-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.2-.4.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4.3-.5.3-.4h10.4v37.1l-2.3.1zm-58.8-15.3l-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5h8.6l.4-.5zm15.9 15.3h-9.9l-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5H92.8l-.2.5-.2.5-.2.5-.2.5-.2.5-.4.9-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5-.2.5h-10l.2-.5.4-.9.2-.5.2-.5.4-.9.2-.5.2-.5.2-.5.2-.3.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.4-.9.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.4-.9.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.1-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.4-.9.2-.5h9.4l.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.4.9.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.2.5.4.9-1-.4zm-44.4-4.8l-.4.3-.4.3-.4.3-.4.3-.4.3-.4.3-.4.3-.5.3-.5.3-.5.3-.5.2-.5.3-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.1-.5.1-.5.1-.5.1-.5.1-.6.1-.5.1-.6.1-.5.1-.6.1H59l-.5-.1-.6-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.1-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.2-.5-.3-.4-.2-.5-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.4-.4-.3-.4-.4-.4-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.4-.2-.4-.3-.5-.3-.4-.2-.5-.2-.5-.2-.5-.2-.5-.2-.4-.2-.5-.1-.5-.2-.5-.1-.5-.2-.5-.1-.5v-.5l-.1-.5v-.5l-.1-.5V212.4l.1-.6.1-.5.1-.5.1-.5.2-.5.1-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.2-.5.3-.5.3-.4.2-.4.3-.4.3-.4.3-.4.3-.4.3-.4.3-.4.4-.4.3-.4.4-.4.4-.4.4-.3.4-.4.4-.3.4-.3.4-.3.4-.3.4-.3.4-.3.5-.3.5-.3.5-.3.5-.2.5-.2.5-.3.4-.2.5-.2.5-.2.5-.1.5-.2.5-.1.5-.2.5-.1.5-.1.5-.1.5-.1.5-.1.5-.1.5-.1H61l.6.1.6.1h.5l.5.1.6.1.5.1.5.1.5.1.5.1.5.1.5.1.5.2.5.1.4.2.5.2.9.4.5.2.5.3.5.2.4.3.5.3.4.3.5.3.4.3.4.3.4.3.4.3.4.4.4.3-.3.4-.4.4-.3.4-.4.4-.3.4-.3.4-.4.4-.3.4-.3.4-.4.4-.3.4-.4.4-.3.4-.3.4-.4.4-.3.4-.4.4-.3.4-.4-.3-.4-.4-.4-.3-.4-.3-.4-.3-.4-.3-.4-.3-.5-.3-.4-.2-.4-.2-.4-.2-.5-.2-.5-.2-.5-.1-.5-.1-.5-.1-.5-.1-.6-.1-.6-.1h-1.1l-.5.1-.5.1-.5.1-.5.1-.5.2-.5.2-.4 1.2-.5.2-.4.3-.4.3-.4.3-.4.3-.4.3-.4.3-.3.4-.4.4-.3.4-.3.4-.3.4-.2.5-.3.4-.2.5-.2.5-.2.5-.2.5-.1.5-.1.5-.1.6v3.7l.1.5.1.5.1.5.2.5.6-.2.2.5.2.5.3.5.5.8.3.4.3.4.4.4.3.4.4.3.4.3.4.3.4.3.4.3.5.2.5.2.5.2.5.2.5.2.5.1.5.1.5.1.6.1h.9l.6-.1.6-.1.5-.1.5-.1.5-.1.5-.1.5-.1.5-.2.4-.2.5-.2.4-.2.4-.3v-5h-7.4v-7.4H76v16.6l-.3.2zM59.4 112.2h22v-17h-22V60.5h22.9v-17H40.7v122.7h41.9v-17H59.4v-37m157.4 3.7v27.7c0 4.9-2.3 7.2-7 7.2h-3.5c-4.9 0-7.2-2.3-7.2-7.2V66.1c0-4.9 2.3-7.2 7.2-7.2h3.1c4.7 0 7 2.3 7 7.2v24h18.3V65c0-15.2-7.3-22.6-22.5-22.6h-9.1c-15.2 0-22.7 7.5-22.7 22.8v79.2c0 15.3 7.5 22.8 22.7 22.8h9.2c15.2 0 22.7-7.5 22.7-22.8v-28.6h-18.2M152 43.5h18.7v122.7H152V43.5zM124.9 98c0 4.9-2.3 7.2-7 7.2h-7.7V60h7.7c4.7 0 7 2.3 7 7.2V98zm-4-54.5H91.6v122.7h18.7v-44.5h10.6c15.2 0 22.7-7.5 22.7-22.8V66.3c0-15.3-7.5-22.8-22.7-22.8zM84.7 277.1h106.9l-54.5 18-52.4-18"/></svg>`,
} as const;
export const TRAILERS_PLACEHOLDER = [
  {
    id: 16328,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 161324528,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 13245,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 16728,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 13345,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 13645,
    name: "GTA Online: Smuggler's Run Trailer",
    preview:
      "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
    },
  },
  {
    id: 16227,
    name: "GTA Online: Gunrunning Trailer",
    preview:
      "https://media.rawg.io/media/movies/80c/80c2eeb2478d31291dfb5a5fd5a45f2e.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie_max.mp4",
    },
  },
  {
    id: 16226,
    name: "GTA Online: Tiny Racers Trailer",
    preview:
      "https://media.rawg.io/media/movies/7c9/7c9f84f3ec31106944a04128287fdd6a.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4",
    },
  },
  {
    id: 16225,
    name: "GTA Online Cunning Stunts: Special Vehicle Circuit Trailer",
    preview:
      "https://media.rawg.io/media/movies/d6e/d6e1deb16c4275e8f5769528780e03ac.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie_max.mp4",
    },
  },
  {
    id: 16224,
    name: "GTA Online: Import/Export",
    preview:
      "https://media.rawg.io/media/movies/1c1/1c1429a6557185326c1d8c03a6f325c0.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie_max.mp4",
    },
  },
  {
    id: 16223,
    name: "GTA Online: Deadline",
    preview:
      "https://media.rawg.io/media/movies/f80/f8051b0eb479fa1785c1e04c8e54e322.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie_max.mp4",
    },
  },
  {
    id: 16222,
    name: "GTA Online: Bikers Trailer",
    preview:
      "https://media.rawg.io/media/movies/955/9556607dec02bf324c87aa33bba2ed8e.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie_max.mp4",
    },
  },
  {
    id: 16221,
    name: "GTA Online: Cunning Stunts Trailer",
    preview:
      "https://media.rawg.io/media/movies/66e/66e78864cf57faa2a52cfab4eb6830a4.jpg",
    data: {
      "480":
        "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie480.mp4",
      max: "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie_max.mp4",
    },
  },
];
export const GAME_PLACEHOLDER = [
  {
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    name_original: "Grand Theft Auto V",
    description:
      "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>\n<p>Español<br />\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.<br />\nNarración simultánea desde tres perspectivas únicas:<br />\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.<br />\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.</p>",
    metacritic: 92,
    metacritic_platforms: [
      {
        metascore: 96,
        url: "https://www.metacritic.com/game/pc/grand-theft-auto-v",
        platform: {
          platform: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/playstation-3/grand-theft-auto-v",
        platform: {
          platform: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/playstation-4/grand-theft-auto-v",
        platform: {
          platform: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        metascore: 81,
        url: "https://www.metacritic.com/game/playstation-5/grand-theft-auto-v",
        platform: {
          platform: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/xbox-360/grand-theft-auto-v",
        platform: {
          platform: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/xbox-one/grand-theft-auto-v",
        platform: {
          platform: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        metascore: 79,
        url: "https://www.metacritic.com/game/xbox-series-x/grand-theft-auto-v",
        platform: {
          platform: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
    ],
    released: "2013-09-17",
    tba: false,
    updated: "2026-04-03T07:53:43",
    background_image:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    background_image_additional:
      "https://media.rawg.io/media/screenshots/5f5/5f5a38a222252d996b18962806eed707.jpg",
    website: "http://www.rockstargames.com/V/",
    rating: 4.47,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 4421,
        percent: 58.98,
      },
      {
        id: 4,
        title: "recommended",
        count: 2458,
        percent: 32.79,
      },
      {
        id: 3,
        title: "meh",
        count: 471,
        percent: 6.28,
      },
      {
        id: 1,
        title: "skip",
        count: 146,
        percent: 1.95,
      },
    ],
    reactions: {
      "1": 33,
      "2": 11,
      "3": 52,
      "4": 24,
      "5": 13,
      "6": 11,
      "7": 19,
      "8": 24,
      "9": 2,
      "10": 10,
      "11": 20,
      "12": 16,
      "13": 1,
      "14": 3,
      "15": 2,
      "16": 6,
      "18": 4,
      "20": 1,
      "21": 2,
    },
    added: 22540,
    added_by_status: {
      yet: 560,
      owned: 12875,
      beaten: 6483,
      toplay: 652,
      dropped: 1191,
      playing: 779,
    },
    playtime: 74,
    screenshots_count: 58,
    movies_count: 12,
    creators_count: 11,
    achievements_count: 539,
    parent_achievements_count: 75,
    reddit_url: "https://www.reddit.com/r/GrandTheftAutoV/",
    reddit_name: "",
    reddit_description: "",
    reddit_logo: "",
    reddit_count: 5184,
    twitch_count: 102,
    youtube_count: 1000000,
    reviews_text_count: 136,
    ratings_count: 7360,
    suggestions_count: 450,
    alternative_names: [
      "GTA 5",
      "GTA V",
      "GTA5",
      "GTA5 Enhanced",
      "GTAV",
      "GTAVENHANCED",
    ],
    metacritic_url: "https://www.metacritic.com/game/pc/grand-theft-auto-v",
    parents_count: 0,
    additions_count: 3,
    game_series_count: 12,
    user_game: null,
    reviews_count: 7496,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 1459,
          image_background:
            "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 1240,
          image_background:
            "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3192,
          image_background:
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 560594,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        released_at: "2013-09-17",
        requirements: {
          minimum:
            "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
          recommended:
            "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6985,
          image_background:
            "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2827,
          image_background:
            "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5738,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
    ],
    stores: [
      {
        id: 290376,
        url: "",
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 123274,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
      },
      {
        id: 290375,
        url: "",
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 8075,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
      },
      {
        id: 438095,
        url: "",
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1450,
          image_background:
            "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        },
      },
      {
        id: 290377,
        url: "",
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1915,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
      },
      {
        id: 290378,
        url: "",
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4938,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
      },
    ],
    developers: [
      {
        id: 3524,
        name: "Rockstar North",
        slug: "rockstar-north",
        games_count: 29,
        image_background:
          "https://media.rawg.io/media/screenshots/43b/43b00286439d859eaea32b8e269b83f9.jpg",
      },
      {
        id: 10,
        name: "Rockstar Games",
        slug: "rockstar-games",
        games_count: 26,
        image_background:
          "https://media.rawg.io/media/screenshots/a95/a95c031fe96063cc40ad377fd828d9ad.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 191532,
        image_background:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
    ],
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 250824,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 51708,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 42553,
        image_background:
          "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 24143,
        image_background:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 39707,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3450,
        image_background:
          "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 26623,
        image_background:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 14391,
        image_background:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 9265,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 6588,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 37393,
        image_background:
          "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 14710,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 28841,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 8513,
        image_background:
          "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 14864,
        image_background:
          "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 4168,
        image_background:
          "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 1136,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 3269,
        image_background:
          "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg",
      },
      {
        id: 62349,
        name: "vr mod",
        slug: "vr-mod",
        language: "eng",
        games_count: 17,
        image_background:
          "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
      },
    ],
    publishers: [
      {
        id: 2155,
        name: "Rockstar Games",
        slug: "rockstar-games",
        games_count: 82,
        image_background:
          "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
    },
    clip: null,
    description_raw:
      "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\n\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.",
  },
  {
    id: 490430,
    slug: "prince-of-persia-the-sands-of-time-remake",
    name: "Prince of Persia: The Sands of Time Remake",
    name_original: "Prince of Persia: The Sands of Time Remake",
    description:
      "<p>The Prince has returned! Experience the classic tale that redefined action-adventure gaming in this full-scale remake for a new generation.</p>\n<ul>\n<li>You are the Prince of Persia. Embark on a journey to save your kingdom from the treacherous Vizier.  </li>\n<li>Master the Sands of Time and use your dagger to reverse, accelerate, freeze, and slow time itself.  </li>\n<li>Fight cursed enemies and solve puzzles along the way.  </li>\n<li>Experience incredible graphical enhancements and re-designed gameplay mechanics.  </li>\n<li>Unlock Prince of Persia, the original game from 1989, along your journey.</li>\n</ul>",
    metacritic: null,
    metacritic_platforms: [],
    released: null,
    tba: true,
    updated: "2026-03-31T17:19:26",
    background_image:
      "https://media.rawg.io/media/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
    background_image_additional:
      "https://media.rawg.io/media/screenshots/997/997d1f79363dd5e440bff6a6c8d4b187.jpg",
    website: "",
    rating: 3.75,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 40,
        percent: 37.38,
      },
      {
        id: 4,
        title: "recommended",
        count: 40,
        percent: 37.38,
      },
      {
        id: 1,
        title: "skip",
        count: 20,
        percent: 18.69,
      },
      {
        id: 3,
        title: "meh",
        count: 7,
        percent: 6.54,
      },
    ],
    reactions: {
      "1": 2,
      "2": 2,
      "3": 2,
      "4": 1,
      "5": 1,
      "11": 1,
    },
    added: 960,
    added_by_status: {
      yet: 126,
      owned: 224,
      beaten: 26,
      toplay: 561,
      dropped: 11,
      playing: 12,
    },
    playtime: 0,
    screenshots_count: 6,
    movies_count: 0,
    creators_count: 0,
    achievements_count: 0,
    parent_achievements_count: 0,
    reddit_url: "",
    reddit_name: "",
    reddit_description: "",
    reddit_logo: "",
    reddit_count: 0,
    twitch_count: 2,
    youtube_count: 0,
    reviews_text_count: 16,
    ratings_count: 91,
    suggestions_count: 433,
    alternative_names: [],
    metacritic_url: "",
    parents_count: 1,
    additions_count: 0,
    game_series_count: 0,
    user_game: null,
    reviews_count: 107,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 1459,
          image_background:
            "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
        },
        released_at: null,
        requirements: {},
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 560590,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        released_at: null,
        requirements: {},
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6985,
          image_background:
            "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        },
        released_at: null,
        requirements: {},
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5738,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        released_at: null,
        requirements: {},
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 1240,
          image_background:
            "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
        },
        released_at: null,
        requirements: {},
      },
    ],
    stores: [
      {
        id: 482160,
        url: "",
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4938,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
      },
      {
        id: 482162,
        url: "",
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 8075,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
      },
      {
        id: 482161,
        url: "",
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1450,
          image_background:
            "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        },
      },
    ],
    developers: [
      {
        id: 405,
        name: "Ubisoft",
        slug: "ubisoft",
        games_count: 349,
        image_background:
          "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 191530,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
    ],
    tags: [
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1839,
        image_background:
          "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
      },
      {
        id: 271,
        name: "Remake",
        slug: "remake",
        language: "eng",
        games_count: 1738,
        image_background:
          "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
      },
    ],
    publishers: [
      {
        id: 918,
        name: "Ubisoft Entertainment",
        slug: "ubisoft-entertainment",
        games_count: 1101,
        image_background:
          "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
      },
    ],
    esrb_rating: {
      id: 3,
      name: "Teen",
      slug: "teen",
    },
    clip: null,
    description_raw:
      "The Prince has returned! Experience the classic tale that redefined action-adventure gaming in this full-scale remake for a new generation.\n\n- You are the Prince of Persia. Embark on a journey to save your kingdom from the treacherous Vizier.\n- Master the Sands of Time and use your dagger to reverse, accelerate, freeze, and slow time itself.\n- Fight cursed enemies and solve puzzles along the way.\n- Experience incredible graphical enhancements and re-designed gameplay mechanics.\n- Unlock Prince of Persia, the original game from 1989, along your journey.",
  },
];

export const FOURTH_COLOR = "#3b82f6";