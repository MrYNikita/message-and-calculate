import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body, html {
    height: 100%;
}
#root {
    height: inherit;
}
`;