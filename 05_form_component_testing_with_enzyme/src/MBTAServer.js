const MBTAServer = {
   fetch: () => {
    return new Promise(resolve => setTimeout(() => resolve('Broken'), 1000));
  }
}

export default MBTAServer;
