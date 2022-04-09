import { alias } from "react-app-rewire-alias";

/**
 Функция для изменения конфигурации webpack внутри create-react-app
 Использует зависимость react-app-rewired.
 B package.json скрипты start и build необходимо изменить на react-app-rewired start(build)
 */

export default function override(config, env) {
  alias({
    "@components": ["src/components"],
    "@constants": ["src/constants"],
    "@hoc-helpers": ["src/helpers"],
    "@services": ["src/services"],
    "@utils": ["src/utils"],
  })(config);
  return config;
}
