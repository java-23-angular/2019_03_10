export class DeleteResponseDto {
  constructor(public status: string) {

  }

  toString(): string {
    return this.status;
  }

}
