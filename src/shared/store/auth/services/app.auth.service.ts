class AppAuthService {
  private static _instance: AppAuthService
  private jwt = ''
  private roles: string[] = []

  constructor () {
    if (AppAuthService._instance) {
      return AppAuthService._instance
    }

    AppAuthService._instance = this
  }

  setJwt ({ newJwt }: { newJwt: string }): void {
    this.jwt = newJwt
    localStorage.setItem('jwt', this.jwt)
  }

  getJwt (): string {
    this.jwt = String(localStorage.getItem('jwt'))

    return this.jwt
  }

  setRoles ({ newRoles }: { newRoles: string[] }): void {
    this.roles = newRoles
    localStorage.setItem('roles', String(this.roles))
  }

  getRoles (): string[] {
    this.roles = String(localStorage.getItem('roles')).split(',')

    return this.roles
  }

  isLoggedIn (): boolean {
    const loggedIn = this.getJwt()

    return (!loggedIn || !(loggedIn.length > 0))
  }
}

export default new AppAuthService()
