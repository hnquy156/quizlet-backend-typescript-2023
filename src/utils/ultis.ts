class Until {
  public static async sleep(time: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), time);
    });
  }
}

export default Until;
