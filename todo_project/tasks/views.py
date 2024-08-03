from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from tasks.models import Users
from tasks.models import Task


class UserRegister(APIView):
    def post(self, request):
        email = request.data['email']
        nome = request.data['nome']
        sobrenome = request.data['sobrenome']
        password = request.data['password']

        if Users.objects.filter(email=email).exists():
            return Response({
                'error': 'E-mail já está em uso'}, 
                status=status.HTTP_400_BAD_REQUEST,
                )
        
        # Criar e salvar o novo usuário
        user = Users(
            email=email,  # Usando o e-mail como nome de usuário
            nome=nome,
            sobrenome=sobrenome,
            password=password,
        )
        user.save()

        print(email)
        
        return Response({
            'message': 'Usuário registrado com sucesso'}, 
            status=status.HTTP_201_CREATED,
            )
    
class UserAuth(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        if Users.objects.filter(email=email).exists() and Users.objects.filter(password=password).exists():
            print(email)
            return Response({
                'message': 'login realizado com sucesso'},
                status=status.HTTP_201_CREATED,
                )
        else:
            return Response({
                'error': 'login ou senha incorreto'},
                status=status.HTTP_400_BAD_REQUEST,
                )
        
class AddTask(APIView):
    def post(self, request):
        descricao = request.data.get('tarefa')
        username = request.data.get('username')
        print(username)
        try:
            # Obtém o usuário com base no nome de usuário (email)
            user_existe = Users.objects.filter(email=username).exists()
            user = Users.objects.get(email=username)
            print(user)
        except Users.DoesNotExist:
            return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_404_NOT_FOUND)

        # Cria a tarefa e associa ao usuário
        task = Task(
            owner=user,
            descricao=descricao,
        )
        task.save()

        return Response({'message': 'Tarefa adicionada com sucesso'}, status=status.HTTP_201_CREATED)


