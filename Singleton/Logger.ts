// Logger.ts
export class Logger {
  private logs: object[];
  // Usa o tipo `Logger`
  private static instance: Logger;
  /**
   * O construtor do Singleton deve ser sempre privado para evitar
   * chamadas de construção com o operador `new`..
   */
  private constructor() {
    this.logs = [];
  }
  get count(): number {
    return this.logs.length;
  }
  /**
   * O método estático que controla o acesso à instância Logger.
   *
   * Esta implementação permite que você crie uma subclasse da classe Logger enquanto mantém
   * apenas uma instância de cada subclasse..
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  /**
   * Finalmente, qualquer singleton deve definir alguma lógica de negócios, que pode ser
   * executado em sua instância.
   */
  log(message: string) {
    const timestamp: string = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}
