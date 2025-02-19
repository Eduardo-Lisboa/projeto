import TerminalUtil from "@/app/util/terminalUtil";
import { terminal, Terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";
import menuUsuario from "./menuUsuario";

export default async function menuPrincipal() {
   TerminalUtil.titulo('Menu Principal')

   const [indeice] = await TerminalUtil.menu([
       "1. Fundamentos",
       "2. Usuario",
       "Sair"
    ])

    switch(indeice) {
        case 0: 
            await menuFundamentos();
            break
        case 1:
            await menuUsuario();
            break
        default: 
            process.exit(0)
    }

   menuPrincipal()
}