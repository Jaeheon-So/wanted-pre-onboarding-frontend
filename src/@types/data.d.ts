interface SignupRequest {
  email: string;
  password: string;
}

interface SignupResponse {}

interface SigninRequest {
  email: string;
  password: string;
}

interface SigninResponse {
  access_token: string;
}

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

interface TodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface CallbacksType {
  fetchTodo: () => void;
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: string, done: boolean) => void;
}
