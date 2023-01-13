import ast
from ast import literal_eval


class VariableExtractor(ast.NodeTransformer):
    def __init__(self):
        self.variables = {}

    def visit_Assign(self, node):
        for target in node.targets:
            if isinstance(target, ast.Name):
                self.variables[target.id] = node.value
        return node


def process_code(file_path):
    variable_states = {}
    with open(file_path, 'r') as file:
        tree = ast.parse(file.read())
        variable_extractor = VariableExtractor()
        variable_extractor.visit(tree)
        variable_states = variable_extractor.variables
    return variable_states


result = process_code('sample_file.py')

for variable, node in result.items():
    value = literal_eval(node)
    print(f'{variable}: {value}')
